import axios from "axios";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useRouter } from "next/router";

export default function SigninForm({ setOpen }) {
  const router = useRouter();

  return (
    <>
      <section className="signin-form">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values, actions) => {
            axios
              .post("/api/admin", { ...values })
              .then((res) => {
                if (res.status == 200) {
                  router.push("/admin-panel");
                }
              })
              .catch((err) => {
                if (err.response.status == 401) {
                  alert("incorrect credentials");
                }
                console.log(err);
              });
            actions.resetForm();
            setOpen(false);
          }}
        >
          {() => (
            <Form className="form" autoComplete="off">
              <h2 className="h2">Sign in</h2>
              <div className="form-group">
                <Field
                  fullWidth
                  component={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                />
              </div>
              <div className="form-group">
                <Field
                  fullWidth
                  component={TextField}
                  name="password"
                  label="Password"
                  variant="outlined"
                />
              </div>

              <input type="submit" className="btn-primary" value="sign in" />
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}
