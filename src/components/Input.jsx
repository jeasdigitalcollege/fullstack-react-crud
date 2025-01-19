export default function Input({
   id,
   nome,
   tipo,
   placeholder,
   width,
   onChange,
}) {
   return (
      <div className="flex flex-col">
         <label htmlFor={id}>{nome}</label>
         <input
            onChange={onChange}
            id={id}
            type={tipo}
            placeholder={placeholder}
            className={`border border-gray-300 ${width}`}
         />
      </div>
   );
}
