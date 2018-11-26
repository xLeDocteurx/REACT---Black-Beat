import React from 'react'
import { 
    // Menu, Button, Checkbox, Form, Header, Image, 
    List, Dropdown, Modal } from 'semantic-ui-react'

class LoadModal extends Modal {

    state = {}

    // constructor(props) {

    //     super(props)

    //     this.state = {
    //         projects: projects.projects,
    //     }
    // }

    loadProject = (id) => {
        console.log(`Trying to save a project ${id}`);
    }
    
    render () {

        return (

            <Modal trigger={<Dropdown.Item
                text='Load'
                // description='ctrl + l' 
                icon='folder open'
            />}>
            {/* <Modal trigger={<MyCards key={this.props.element.id} element={this.props.element}/>}> */}
                <Modal.Header>Load a project</Modal.Header>
                {/* <Modal.Content image> */}
                <Modal.Content>
                    
                    {/* <Image wrapped size='medium' src='' alt='img' /> */}
                    <Modal.Description>
                        <List selection divided relaxed>

                            {this.props.projects.map(project => (


                                <List.Item key={project.id} 
                                // as='a' 
                                // href='http://google.com' 
                                // target='_BLANK'
                                // onClick={this.loadProject(project.id)}
                                >
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header 
                                            // as='a'
                                        >{ project.id } !! { project.title }</List.Header>
                                        <List.Description 
                                            // as='a'
                                        >{ project.owner }</List.Description>
                                    </List.Content>
                                </List.Item>

                            ))}

                        </List>
                    </Modal.Description>

                </Modal.Content>
            </Modal>
        )
    }
}



export default LoadModal;