import React from 'react';
import { Formik } from 'formik';

class PostForm extends React.Component {
  handleFormSubmit = (values) => {
    const { addPost } = this.props
    addPost({
      variables: {
        data: {...values}
      }
    });
  }

  render() {
    return( 
        <div>
        <h4>Registrar Posts!</h4>
        <Formik
          initialValues={{ title: '', content: '' }}
          validate={values => {
            let errors = {};
            if (!values.title) {
              errors.title = 'Required';
            } 
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              this.handleFormSubmit(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
              <input
                type="content"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              {errors.content && touched.content && errors.content}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

export default PostForm
