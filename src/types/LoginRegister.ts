
export interface Registration {
    errorName: boolean
    errorMail: boolean
    errorPwd: boolean
    errorConfirmPwd: boolean
    errorServer: string | null
    loading: boolean
    success: boolean
}

export interface Login {
    errorMail: boolean
    errorPwd: boolean
    errorServer: string | null
    loading: boolean
    success: boolean
}