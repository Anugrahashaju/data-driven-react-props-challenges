import '../App.css'

export function AlertBox({message,type})
{
    const alertClass = `alert alert-${type || 'success'}`
    return(
        <>
            <div className={alertClass}>{message}</div>
        </>
    )
}