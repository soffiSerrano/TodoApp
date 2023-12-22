import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, TextInput, Animated, Easing } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import TaskCard from "../TaskCard";
import { addTask, deleteTask, toggleTask } from "../../../redux/action";
import { Container } from "./styled";

const TaskList = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state: any) => state.todos);
	const [localTasks, setLocalTasks] = useState([]);
	const [newTaskText, setNewTaskText] = useState("");
	const [animation] = useState(new Animated.Value(0));
	const cardScale = useRef(new Animated.Value(0)).current;
	const [newlyAddedTaskId, setNewlyAddedTaskId] = useState<number | null>(null);

	const handleDelete = (taskId: number) => {
		dispatch(deleteTask(taskId));
	};

	const handleToggle = (taskId: number) => {
		dispatch(toggleTask(taskId));
	};

	const handleAddTask = () => {
		if (newTaskText.trim() !== "") {
			const newTask = { id: tasks.length + 1, text: newTaskText };
			dispatch(addTask(newTaskText)); 
			setNewTaskText(""); 
			setNewlyAddedTaskId(newTask.id);

			Animated.sequence([
        Animated.timing(cardScale, {
          toValue: 2,
          duration: 150, 
          easing: Easing.out(Easing.back(1)),
          useNativeDriver: true,
        }),
        Animated.timing(cardScale, {
          toValue: 1,
          duration: 150,
          easing: Easing.out(Easing.back(1)),
          useNativeDriver: true,
        }),
      ]).start(() => {
				setNewlyAddedTaskId(null);
			});
		}
	};

	useEffect(() => {
		setLocalTasks(tasks);
	}, [tasks]); 

	return (
		<Container>
			<TextInput
				placeholder="New Task"
				value={newTaskText}
				onChangeText={(text) => setNewTaskText(text)}
			/>
			<Button title="Add Task" onPress={handleAddTask} />
			{tasks.map((task: any, index: number) => (
				<Animated.View
					key={task.id}
					style={{
						transform: [{ scale: newlyAddedTaskId === task.id ? cardScale : 1 }],
						marginBottom: 10,
						padding: 10,
						backgroundColor: "lightblue",
					}}
				>
					<TaskCard
						key={task.id}
						text={task.text}
						completed={task.completed}
						onToggle={() => handleToggle(task.id)}
						onDelete={() => handleDelete(task.id)}
					/>
				</Animated.View>
			))}
		</Container>
	);
};

export default TaskList;
