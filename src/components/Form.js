import React from 'react'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { Container } from './Container'
import { StyledForm } from './StyledForm'
import { InputCombo } from './InputCombo'
import { VerticalSplitter } from './VerticalSplitter'
import axios from 'axios'
import { SavedUsers } from './SavedInstructions'
import UserCard from './UserCard'

function Form(props) {
  const selection = props.selection
  const setSelection = props.setSelection
  const [disabledButton, setDisabledButton] = useState(true)

  const initialFormState = {
    name: '',
    size: '',
    broccolini: false,
    sausage: false,
    gorgonzola: false,
    mushroom: false,
    anchovies: false,
    pepperoni: false,
    peppers: false,
    ham: false,
    special: '',
  }

  const [formData, setFormData] = useState(initialFormState)

  const initialErrorsState = {
    name: '',
    size: '',
    broccolini: false,
    sausage: false,
    gorgonzola: false,
    mushroom: false,
    anchovies: false,
    pepperoni: false,
    peppers: false,
    ham: false,
    special: '',
  }
  const [errors, setErrors] = useState(initialErrorsState)

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Must include name.')
      .min(2, 'name must be at least 2 characters'),
    size: yup
      .string()
      .required('must include size')
      .min(1, 'must include size'),
    broccolini: yup.bool(),
    sausage: yup.bool(),
    gorgonzola: yup.bool(),
    mushroom: yup.bool(),
    anchovies: yup.bool(),
    pepperoni: yup.bool(),
    peppers: yup.bool(),
    ham: yup.bool(),
    special: yup.string(),
  })

  // sausage: yup.string().oneOf(['true', 'false']),

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const clearFormData = () => {
    setFormData(initialFormState)
    setErrors(initialErrorsState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // debugger

    axios
      .post('https://reqres.in/api/selection', formData)
      .then((res) => {
        if (selection === undefined) {
          setSelection(res.data)
        } else {
          const newArr = [...selection, res.data]
          setSelection(newArr)
        }
        clearFormData()
      })
      .catch((err) => console.log('ERROR', err))
  }

  const handleChange = (e) => {
    const { name, type } = e.target
    const valueToUse = type === 'checkbox' ? 'checked' : 'value'
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target[valueToUse],
      }
    })

    setFormErrors(name, e.target[valueToUse])
  }

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setDisabledButton(!valid))
  }, [formData, errors, formSchema, selection])

  return (
    <Container>
      <h1>Build your Pizza!</h1>

      <StyledForm id='pizza-form' onSubmit={(e) => handleSubmit(e)}>
        <label for='id'>Name</label>

        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          style={{ width: '20%', boxSizing: 'border-box' }}
        />

        <label for='size'>Size</label>

        <select
          id='size'
          name='size'
          value={formData.size}
          onChange={(e) => handleChange(e)}
          style={{ width: '20%', boxSizing: 'border-box' }}
        >
          <option selected='selected' disabled='disabled'></option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>

        <label for='broccolini'>Broccolini</label>
        <input
          id='broccolini'
          name='broccolini'
          type='checkbox'
          value={formData.broccolini}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='sausage'>Sausage</label>
        <input
          id='sausage'
          name='sausage'
          type='checkbox'
          value={formData.sausage}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='gorgonzola'>Gorgonzola</label>
        <input
          id='gorgonzola'
          name='gorgonzola'
          type='checkbox'
          value={formData.gorgonzola}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='mushroom'>Mushroom</label>
        <input
          id='mushroom'
          name='mushroom'
          type='checkbox'
          value={formData.mushroom}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='anchovies'>Anchovies</label>
        <input
          id='anchovies'
          name='anchovies'
          type='checkbox'
          value={formData.anchovies}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='pepperoni'>pepperoni</label>
        <input
          id='pepperoni'
          name='pepperoni'
          type='checkbox'
          value={formData.pepperoni}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='peppers'>Peppers</label>
        <input
          id='peppers'
          name='peppers'
          type='checkbox'
          value={formData.peppers}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='ham'>Ham</label>
        <input
          id='ham'
          name='ham'
          type='checkbox'
          value={formData.ham}
          onChange={(e) => handleChange(e)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />

        <label for='special'>Special Instructions</label>
        <input
          id='special'
          name='special'
          type='text'
          value={formData.special}
          onChange={(e) => handleChange(e)}
          style={{ width: '50%', height: '50%', boxSizing: 'border-box' }}
        />

        <button
          style={{ width: '300px', height: '30px' }}
          disabled={disabledButton}
          id='submitBtn'
        >
          Submit!
        </button>
      </StyledForm>
    </Container>
  )
}

export default Form
