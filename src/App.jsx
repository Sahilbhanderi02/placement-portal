import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button } from './components/ui/button'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <AppRoutes/>
      
      {/* below is for testing tailwind and shadcn */}
      {/* <div className="h-screen flex items-center justify-center bg-black text-white">
        Hello Tailwind 🚀
      </div>    
      <div className="flex flex-col gap-4 p-8 bg-background min-h-screen">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
     */}
    </>
  )
}

export default App
