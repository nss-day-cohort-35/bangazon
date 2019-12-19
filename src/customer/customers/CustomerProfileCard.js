import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



export default class CustomerProfileCard extends Component {

// classes =()=> useStyles();

					componentDidMount() {
						this.setState({
							hover: false
						});
					}

					render() {
						return (
							<Card className={`this.classes.card`}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Customer"
										height="140"
										width="100"
										image="https://secure.gravatar.com/avatar/49b917047d697e1593433718dcd0212d"
										title="Customer"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											<p className="customerName">
												Sage Klein
												{/* {this.props.firstname}{" "}{this.props.firstname} */}
											</p>
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											className="customerId"
										>
											#394797998
											{/* {this.props.customerId} */}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											className="customerId"
										>
											MAILING ADDRESS: Git out my business
											Ave Nashville TN, 37209
											{/* {this.props.} */}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											className="customerId"
										>
											E-MAIL ADDRESS:
											yallmadcauseyouaintme@haters.com
											{/* {this.props.} */}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											className="customerId"
										>
											PHONE NUMBER:
											615-627-8548
											{/* {this.props.} */}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Edit
									</Button>
									<Button size="small" color="primary">
										Save
									</Button>
								</CardActions>
							</Card>
						);
					}
				}
