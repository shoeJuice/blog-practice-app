import React from 'react'


import styles from '../../styles/generics.module.css'
import LoginForm from '../../modules/admin/components/_loginForm'



function loginPage() {
  return (
    <div className={styles.pageBackground}>
        <LoginForm />
    </div>
  )
}

export default loginPage