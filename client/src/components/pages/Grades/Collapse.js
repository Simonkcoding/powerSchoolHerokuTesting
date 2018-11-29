import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import "./Grades.css";
import moment from 'moment'

class example extends Component {
    state = {
        isCollapse: false,
        assignment: []
    }

    toggle = () => {
        this.setState({
            isCollapse: !this.state.isCollapse
        });
        let assignmentArray = this.props.info.subject.filter(item => Object.keys(item).includes('score'))
        this.setState({
            assignment: assignmentArray
        })
    }

    render() {
        return (

            <div>
                <p className="view-assignments">
                    <span
                        className="button view-assignments-button"
                        onClick={this.toggle}
                    >View Assignments
                     </span>
                </p>
                

                <Collapse
                   
                    isOpen={this.state.isCollapse}>
                    <Card>
                        <CardBody>
                        <div className="columns">
                                    <div className="column is-4">
                                        Assignment
                                    </div>
                                    <div className="column is-3">
                                        Date
                                    </div>
                                    <div className="column is-2">
                                       Score
                                    </div>
                                    <div className="column is-3">
                                        Category
                                    </div>
                                </div>
                            <hr/>
                            {this.state.assignment.map(assignment => (
                                <div className="columns">
                                    <div className="column is-4">
                                        {assignment.assignmentName}
                                    </div>
                                    <div className="column is-3">
                                        {moment(assignment.date).format('YYYY-MM-DD')}
                                    </div>
                                    <div className="column is-2">
                                        {assignment.score}
                                    </div>
                                    <div className="column is-3">
                                        {assignment.category}
                                    </div>
                                </div>
                            ))}

                        </CardBody>
                    </Card>
                </Collapse>
            </div>

        )
    }

}

export default example
