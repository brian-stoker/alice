import { auth, signOut } from "@/lib/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // Double-check authentication (middleware should catch this, but just in case)
  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Admin Logo/Title */}
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="text-2xl font-serif font-semibold hover:text-accent transition-colors"
              >
                OLIV Admin
              </Link>
            </div>

            {/* Admin Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/admin"
                className="hover:text-accent transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/blog"
                className="hover:text-accent transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/admin/appointments"
                className="hover:text-accent transition-colors font-medium"
              >
                Appointments
              </Link>
              <Link
                href="/admin/promotions"
                className="hover:text-accent transition-colors font-medium"
              >
                Promotions
              </Link>
            </nav>

            {/* User Info & Sign Out */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-sm">
                <p className="font-medium">{session.user?.name}</p>
                <p className="text-accent text-xs">{session.user?.email}</p>
              </div>
              <form
                action={async () => {
                  "use server"
                  await signOut({ redirectTo: "/" })
                }}
              >
                <button
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-primary-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-2">
            <Link
              href="/admin"
              className="text-white hover:text-accent transition-colors text-sm font-medium py-2 px-3"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/blog"
              className="text-white hover:text-accent transition-colors text-sm font-medium py-2 px-3"
            >
              Blog
            </Link>
            <Link
              href="/admin/appointments"
              className="text-white hover:text-accent transition-colors text-sm font-medium py-2 px-3"
            >
              Appointments
            </Link>
            <Link
              href="/admin/promotions"
              className="text-white hover:text-accent transition-colors text-sm font-medium py-2 px-3"
            >
              Promotions
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-text-muted">
            <p>OLIV Admin Portal - {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
