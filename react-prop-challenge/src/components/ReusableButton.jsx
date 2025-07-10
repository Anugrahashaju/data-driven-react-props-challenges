export function ReusableButton({label,onClick,isDisabled = false}){
    return(
        <>
        
        <button disabled = {isDisabled} onClick={onClick}>
            {label}
        </button>

        </>
    )
}