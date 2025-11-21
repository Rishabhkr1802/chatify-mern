import { Loader } from 'lucide-react';

function LoaderComponent() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Loader className="animate-spin" strokeWidth="2" size={40} />
    </main>
  )
}

export default LoaderComponent;