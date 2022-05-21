import React from 'react'

import styles from '../../styles/generics.module.css'
import supabase from '../../utils/supabase.js'

import {Button} from '@chakra-ui/react'

function logout() {

    

  return (
    <div className={styles.pageBackground}>
        <Button onClick={async(e) => {await supabase.auth.signOut()}}>Sign Out</Button>
    </div>
  )
}

export default logout