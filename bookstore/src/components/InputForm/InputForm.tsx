import { PropsInputForm } from '../../types/interfaces'

export function InputForm ({className, children, id, type, placeholder, name, register }: PropsInputForm): JSX.Element {

   return (
      <div className={className}>
         <label htmlFor={id}>{children}</label>
         <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: true })}
         />
      </div>
   )
}