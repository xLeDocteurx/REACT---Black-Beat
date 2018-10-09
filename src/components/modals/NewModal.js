import React from 'react'
import { 
    Dropdown, Button, 
    // Menu, Checkbox, Header, Image, 
    Form, Modal } from 'semantic-ui-react'

class NewModal extends Modal {
    
    // state = { title: '', about: '' }
    state = {}

    // constructor (props) {
    //     super(props)

    //     this.state = {
    //         title: '',
    //         about: ''
    //     }
    // }

    // handleChange = (e, { name, value }) => this.setState({ [name]: value })

    // handleSubmit = () => {
    //     const { title, about } = this.state

    //     this.setState({ submittedTitle: title, submittedAbout: about })

    //     // DB.newProject();
    // }

    render () {

        return (

            <Modal trigger={<Dropdown.Item
                text='New'
                // description='ctrl + n' 
                icon='file'
            />}>
            {/* <Modal trigger={<MyCards key={this.props.element.id} element={this.props.element}/>}> */}
                <Modal.Header>Create a new project</Modal.Header>
                {/* <Modal.Content image> */}
                <Modal.Content>
                    
                    <Form>
                        <Form.Field>
                            <label>Project Title</label>
                            <input placeholder='Project Title' />
                        </Form.Field>
                        {/* <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field> */}
                        <Form.TextArea label='About' placeholder='Tell us more about your project...' />
                        <Button type='submit' 
                            // onClick={DB.newProject({id:7, owner:'ledocteur'})}
                        >Create</Button>
                    </Form>
                    
                    {/* <Image wrapped size='medium' src='' alt='img' />
                    <Modal.Description>
                    <Header>Id</Header>
                    <p>Description</p>
                    </Modal.Description> */}
                </Modal.Content>
            </Modal>
        )
    }
}



export default NewModal;