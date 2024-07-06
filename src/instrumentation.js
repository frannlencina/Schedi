import connect from './app/lib/dbConnect'

export async function register() {
    await connect()
}
