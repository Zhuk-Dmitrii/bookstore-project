import { PropsInputForm } from "../../types/interfaces"

export function InputForm ({className, children, id, type, placeholder, value, onchange }: PropsInputForm): JSX.Element {
   function handleChangeInput (event: React.ChangeEvent<HTMLInputElement>): void {
      onchange(event.target.value)
   }

   return (
      <div className={className}>
         <label htmlFor={id}>{children}</label>
         <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChangeInput}
         />
      </div>
   )
}