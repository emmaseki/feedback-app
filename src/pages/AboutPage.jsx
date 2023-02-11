import React from 'react'
import Card from '../component/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <p>Version 1.0.0</p>
        <p>
            <Link to='/'>Back To Home</Link>
        </p>
    </Card>
    
  )
}

export default AboutPage