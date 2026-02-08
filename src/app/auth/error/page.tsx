import Link from "next/link"

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const error = searchParams.error

  let errorMessage = "An error occurred during authentication."
  let errorDescription = "Please try again or contact support if the issue persists."

  if (error === "AccessDenied") {
    errorMessage = "Access Denied"
    errorDescription = "Access to the admin portal is restricted to authorized administrators only. Your email address is not authorized."
  } else if (error === "Configuration") {
    errorMessage = "Configuration Error"
    errorDescription = "There is a problem with the authentication configuration. Please contact support."
  } else if (error === "Verification") {
    errorMessage = "Verification Failed"
    errorDescription = "The sign-in link is no longer valid. It may have expired or already been used."
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-semibold text-primary mb-2">
            OLIV
          </h1>
          <p className="text-text-muted text-sm">Admin Portal</p>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <div className="text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-text-dark mb-2">
              {errorMessage}
            </h2>
            <p className="text-text-muted text-sm mb-6">
              {errorDescription}
            </p>

            {error === "AccessDenied" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-red-800">
                  Only <strong>courtneyliz201@gmail.com</strong> is authorized to access the admin portal.
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/auth/signin"
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="block w-full bg-white hover:bg-gray-50 text-primary text-center font-medium py-3 px-4 rounded-lg border-2 border-primary transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
