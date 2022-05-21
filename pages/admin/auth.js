import React from 'react'

import RegisterForm from '../../modules/auth/components/_registerForm'
import styles from '../../styles/generics.module.css'

function auth() {
  return (
    <div className={styles.pageBackground}>
        <RegisterForm />
    </div>
  )
}

export default auth