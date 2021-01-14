import {
    useState
} from 'react';

const useMessageState = (initialValue) => {
    const [messages, setMessages] = useState(initialValue);

    return {
        messages,
        addMessage: (message) => {
            setMessages([...messages, message]);
        },
        // deleteTodo: (todoIndex) => {
        //     const newTodos = message.filter((_, index) => index !== todoIndex);

        //     setTodos(newTodos);
        // }
    };
};

export default useMessageState;