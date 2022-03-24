import { Alert, Snackbar } from "@mui/material"

export default function FlashMessage({ arg }) {
    return (
        <Snackbar
            open={arg.failed || arg.success}
            autoHideDuration={3000}
            onClose={() => {
                if (arg.failed) {

                    arg.setFailed(false)
                } else {
                    arg.setSuccess(false)

                }
            }}
        >
            <Alert severity={arg.failed ? "error" : "success"} sx={{ width: '100%' }}
                onClose={() => {
                    if (arg.failed) {
                        arg.setFailed(false)
                    } else {
                        arg.setSuccess(false)
                    }
                }}>
                {
                    arg.failed
                        ?
                        arg?.error_res?.data?.message ?? null
                        :
                        arg?.success_res?.message ?? null
                }
            </Alert>
        </Snackbar>
    )
}