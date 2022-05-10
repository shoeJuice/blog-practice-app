import React from 'react'

import styles from '../../styles/generics.module.css'
import ContactForm from '../../modules/contactForm/components/_contactForm'

function contactPage() {
  return (
    <div className={styles.pageBackground}>
        <ContactForm />
    </div>
  )
}

export default contactPage