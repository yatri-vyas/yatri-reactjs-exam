import React from 'react';

function Contact() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>

        <p className="text-muted">
          We'd love to hear from you
        </p>
      </div>

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <form>

              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="btn btn-dark w-100">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;