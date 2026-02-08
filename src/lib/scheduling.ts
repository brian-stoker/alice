/**
 * Admin Scheduling Data Functions
 *
 * Provides functions for managing availability windows in the admin panel.
 * Uses sample data when DB is not connected.
 */

export interface AvailabilityWindow {
  id: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWindowData {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isActive?: boolean;
}

export interface UpdateWindowData {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
}

// Sample data for development
const sampleWindows: AvailabilityWindow[] = [
  {
    id: '1',
    dayOfWeek: 1, // Monday
    startTime: '09:00',
    endTime: '12:00',
    isActive: true,
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
  {
    id: '2',
    dayOfWeek: 1, // Monday
    startTime: '14:00',
    endTime: '17:00',
    isActive: true,
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
  {
    id: '3',
    dayOfWeek: 3, // Wednesday
    startTime: '09:00',
    endTime: '12:00',
    isActive: true,
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
  {
    id: '4',
    dayOfWeek: 3, // Wednesday
    startTime: '14:00',
    endTime: '17:00',
    isActive: true,
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
  {
    id: '5',
    dayOfWeek: 5, // Friday
    startTime: '10:00',
    endTime: '15:00',
    isActive: false,
    createdAt: '2026-02-01T12:00:00.000Z',
    updatedAt: '2026-02-01T12:00:00.000Z',
  },
];

// In-memory storage for development
let windows: AvailabilityWindow[] = [...sampleWindows];

/**
 * Validate time format (HH:MM)
 */
function isValidTimeFormat(time: string): boolean {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(time);
}

/**
 * Convert HH:MM to minutes since midnight for comparison
 */
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Check if a new window overlaps with existing windows on the same day
 */
function hasOverlap(
  dayOfWeek: number,
  startTime: string,
  endTime: string,
  excludeId?: string
): boolean {
  const newStart = timeToMinutes(startTime);
  const newEnd = timeToMinutes(endTime);

  return windows.some(w => {
    // Skip if it's the same window being updated
    if (excludeId && w.id === excludeId) return false;

    // Only check windows on the same day
    if (w.dayOfWeek !== dayOfWeek) return false;

    const existingStart = timeToMinutes(w.startTime);
    const existingEnd = timeToMinutes(w.endTime);

    // Check for overlap: new window starts before existing ends AND new window ends after existing starts
    return newStart < existingEnd && newEnd > existingStart;
  });
}

/**
 * Validate window data
 */
function validateWindowData(
  data: CreateWindowData | UpdateWindowData,
  isUpdate: boolean = false
): { valid: boolean; error?: string } {
  // Validate dayOfWeek if provided
  if (data.dayOfWeek !== undefined) {
    if (!Number.isInteger(data.dayOfWeek) || data.dayOfWeek < 0 || data.dayOfWeek > 6) {
      return { valid: false, error: 'Day of week must be between 0 (Sunday) and 6 (Saturday)' };
    }
  }

  // Validate time formats if provided
  if (data.startTime !== undefined && !isValidTimeFormat(data.startTime)) {
    return { valid: false, error: 'Start time must be in HH:MM format' };
  }

  if (data.endTime !== undefined && !isValidTimeFormat(data.endTime)) {
    return { valid: false, error: 'End time must be in HH:MM format' };
  }

  // Validate startTime < endTime if both are provided
  if (data.startTime && data.endTime) {
    if (timeToMinutes(data.startTime) >= timeToMinutes(data.endTime)) {
      return { valid: false, error: 'Start time must be before end time' };
    }
  }

  return { valid: true };
}

/**
 * Get all availability windows
 */
export async function getAllWindows(): Promise<AvailabilityWindow[]> {
  // Sort by dayOfWeek, then by startTime
  return [...windows].sort((a, b) => {
    if (a.dayOfWeek !== b.dayOfWeek) {
      return a.dayOfWeek - b.dayOfWeek;
    }
    return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
  });
}

/**
 * Get a single availability window by ID
 */
export async function getWindowById(id: string): Promise<AvailabilityWindow | null> {
  return windows.find(w => w.id === id) || null;
}

/**
 * Create a new availability window
 */
export async function createWindow(data: CreateWindowData): Promise<AvailabilityWindow> {
  // Validate data
  const validation = validateWindowData(data);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Check for overlaps
  if (hasOverlap(data.dayOfWeek, data.startTime, data.endTime)) {
    throw new Error('This time window overlaps with an existing window on the same day');
  }

  const now = new Date().toISOString();

  const newWindow: AvailabilityWindow = {
    id: crypto.randomUUID(),
    dayOfWeek: data.dayOfWeek,
    startTime: data.startTime,
    endTime: data.endTime,
    isActive: data.isActive !== undefined ? data.isActive : true,
    createdAt: now,
    updatedAt: now,
  };

  windows.push(newWindow);
  return newWindow;
}

/**
 * Update an existing availability window
 */
export async function updateWindow(
  id: string,
  data: UpdateWindowData
): Promise<AvailabilityWindow | null> {
  const index = windows.findIndex(w => w.id === id);
  if (index === -1) return null;

  const window = windows[index];

  // Validate data
  const validation = validateWindowData(data, true);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Determine final values for overlap check
  const finalDayOfWeek = data.dayOfWeek !== undefined ? data.dayOfWeek : window.dayOfWeek;
  const finalStartTime = data.startTime !== undefined ? data.startTime : window.startTime;
  const finalEndTime = data.endTime !== undefined ? data.endTime : window.endTime;

  // Validate startTime < endTime with final values
  if (timeToMinutes(finalStartTime) >= timeToMinutes(finalEndTime)) {
    throw new Error('Start time must be before end time');
  }

  // Check for overlaps (excluding this window)
  if (hasOverlap(finalDayOfWeek, finalStartTime, finalEndTime, id)) {
    throw new Error('This time window overlaps with an existing window on the same day');
  }

  const now = new Date().toISOString();

  const updatedWindow: AvailabilityWindow = {
    ...window,
    ...data,
    updatedAt: now,
  };

  windows[index] = updatedWindow;
  return updatedWindow;
}

/**
 * Delete an availability window
 */
export async function deleteWindow(id: string): Promise<boolean> {
  const index = windows.findIndex(w => w.id === id);
  if (index === -1) return false;

  windows.splice(index, 1);
  return true;
}

/**
 * Toggle window active status
 */
export async function toggleWindowActive(id: string): Promise<AvailabilityWindow | null> {
  const index = windows.findIndex(w => w.id === id);
  if (index === -1) return null;

  const window = windows[index];
  const now = new Date().toISOString();

  const updatedWindow: AvailabilityWindow = {
    ...window,
    isActive: !window.isActive,
    updatedAt: now,
  };

  windows[index] = updatedWindow;
  return updatedWindow;
}
