import { useAppSelector } from 'redux/hooks'
import { createSession } from 'api'

export default function useCheckout() {
    const token = useAppSelector(s => s.customer.token)

    const goToCheckout: React.FormEventHandler = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!token) return

        try {
            const { session } = await createSession(token)
            window.location.href = session.url
        } catch (err) {
            console.log(err)
        } finally {

        }

    };

    return [goToCheckout]
}