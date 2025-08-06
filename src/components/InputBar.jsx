export default function InputBar({placeholder, inputRef, value, onChange} ) {

    return(
        <>
            <input 
            ref={inputRef}
            type="text"  
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}