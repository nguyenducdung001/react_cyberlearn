import React, { Component } from "react";
import { Container } from "../../ComponentsTodoList/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "./../../Themes/ToDoListDarkTheme";

import { ToDoListPrimaryTheme } from "./../../Themes/ToDoListPrimaryTheme";
import { ToDoListLightTheme } from "./../../Themes/ToDoListLightTheme";
import { Dropdown } from "../../ComponentsTodoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsTodoList/Heading";
import { TextField, Label, Input } from "../../ComponentsTodoList/TextField";
import { Button } from "../../ComponentsTodoList/Button";
import {
  Table,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
} from "../../ComponentsTodoList/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from "./../../../redux/actions/ToDoListActions";
import { arrTheme } from "./../../Themes/ThemeManager";
import { change_theme } from "../../../redux/types/ToDoListTypes";

class ToDoList extends Component {
  state = {
    taskName: "",
  };

  renderTaskTodo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(editTaskAction(task));
                }}
                className="ml-2"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="ml-2"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-2"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-2"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // handleChange = (e) => {
  //   let { name, value } = e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option value={theme.id} key={index}>
          {theme.name}
        </option>
      );
    });
  };

  // componentWillReceiveProps(newProps) {
  //   console.log("this props", this.props);
  //   console.log("newProps", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newState;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;

              this.props.dispatch(changThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>To do list</Heading3>
          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              this.setState(
                {
                  taskName: e.target.value,
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
            name="taskName"
            label="Task name"
            className="w-50"
          />
          <Button
            onClick={() => {
              // Lấy thông tin người dùng nhập từ input
              let { taskName } = this.state;
              // Tạo ra một task object
              let task = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };

              // Đưa task object lên redux thông qua phương thức dispatch
              this.props.dispatch(addTaskAction(task));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button
            onClick={() => {
              this.props.dispatch(updateTaskAction(this.state.taskName));
            }}
            className="ml-2"
          >
            <i className="fa fa-upload"></i> Update task
          </Button>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>{this.renderTaskTodo()}</Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
