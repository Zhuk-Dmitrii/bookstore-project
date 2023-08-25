export function Button ({className, value}: {className: string, value: string}): JSX.Element {
   return (
      <button className={className}>{value}</button>
   )
}