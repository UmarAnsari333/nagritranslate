import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-md">
        <h1 className="text-4xl font-bold text-foreground mb-2">Translation Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The language pair you're looking for doesn't exist or hasn't been created yet.
        </p>

        <Link href="/ai-translate/english-to-spanish">
          <Button>
            <Home className="w-4 h-4 mr-2" />
            <span className="text-sm">Back to Translation</span>
            <ArrowLeft className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
