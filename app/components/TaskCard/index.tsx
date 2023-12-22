import React from "react";
import { TouchableOpacity } from "react-native";
import { TaskCardContainer, TaskButton, TaskText } from "./style";
import DeleteIcon from "../DeleteIcon";

interface TaskCardProps {
	text: string;
	completed: boolean;
	onToggle: () => void;
	onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ text, completed, onToggle, onDelete }) => {
	return (
		<TaskCardContainer>
			<TaskText completed={completed}>{text}</TaskText>
			<TouchableOpacity onPress={onToggle}>
				<TaskButton>{completed ? "Reopen" : "Complete"}</TaskButton>
			</TouchableOpacity>
			<DeleteIcon onPress={onDelete} />
		</TaskCardContainer>
	);
};

export default TaskCard;
