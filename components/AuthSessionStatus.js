
const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600 flex justify-center items-center`}
                {...props}>
                <span>{status}</span>
            </div>
        )}
    </>
)

export default AuthSessionStatus
