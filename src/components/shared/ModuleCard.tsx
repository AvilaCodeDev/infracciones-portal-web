
interface Props{
    height?: string
    children: React.JSX.Element
}

export const ModuleCard = ({ children, height = "100vh" }: Props) => {
  return (
    <div className={`bg-muted/50 min-h-[${height}] flex-1 rounded-xl md:min-h-min p-3`}>
        { children }
    </div>
  )
}
