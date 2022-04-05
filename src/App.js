import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Container id='main-container' className='d-grid h-100'>
      <Form id='sign-in-form' className='text-center w-100'>
        <img className='mb-4 bootstrap-logo' src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap 5" />
        <h1 className='mb-3 fs-3 fw-normal'>Please Sign In</h1>
        <Form.Group controlId='sign-in-email'>
            <Form.Control className='position-relative' type='email ' size='lg' placeholder='Email address' autoComplete='username'/>
        </Form.Group>
        <Form.Group controlId='sign-in-pass'>
            <Form.Control className='position-relative mb-3' type='Password' size='lg' placeholder='Password' autoComplete='currentpassword'/>
        </Form.Group>
        <Form.Group controlId='remember-me' className='d-flex justify-content-center'>
            <Form.Check label='Remeber me'/>
        </Form.Group>
        
        <div className='d-grid'>  
        <Button variant='primary'>Sign In</Button>
        </div>

        <p className='mt-5'>&copy; 2022</p>
       
      </Form>
    </Container>
  );
}

export default App;
