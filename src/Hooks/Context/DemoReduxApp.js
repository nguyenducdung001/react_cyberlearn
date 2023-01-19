import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { add_comment } from "../../redux/types/FakeBookType";
import FakeBookReducer from "./../../redux/reducers/FakeBookReducer";
import { addCommentAction } from "./../../redux/actions/FakeBookAction";

export default function DemoReduxApp(props) {
  // useSelector thay cho mapStateToProps
  let comments = useSelector((state) => state.FakeBookReducer.comments);
  //
  let dispatch = useDispatch();

  //
  let [userComment, setUserComment] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  console.log("userComment", userComment);
  const handleChange = (e) => {
    let { value, name } = e.target;

    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const handleComment = (e) => {
    e.preventDefault();
    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };

    dispatch(addCommentAction(usComment));
  };

  return (
    <div className="container ">
      <h3 className="text-success text-center">Fakebook App</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-1">
                  <img src={comment.avatar} style={{ width: "50px" }} />
                </div>
                <div className="col-10">
                  <h6 className="text-danger">{comment.name}</h6>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-secondary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     comments: state.FakeBookReducer.comments,
//   };
// };

//  connect(mapStateToProps, null)(DemoReduxApp);
