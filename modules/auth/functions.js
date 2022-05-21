import supabase from '../../utils/supabase.js'

async function handleInput(string, e){
    e.preventDefault();
    const {error} = await supabase.auth.signIn({email: string})

    console.log(error)
}

export {handleInput}