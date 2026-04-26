import './loadingscreen.css'

type Props = {
  progress: number
}

export default function LoadingScreen({ progress }: Props) {
  return (
    <main className="loading-screen">
      <div className="loading-screen__content">
        <h1 className="loading-screen__percent">{progress}</h1>
        <p className="loading-screen__label">Percent</p>
      </div>
    </main>
  )
}