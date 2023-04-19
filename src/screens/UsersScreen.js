import {
    Button,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import { useState, useEffect } from 'react'

export default function UsersScreen({ navigation }) {
    const [users, setUsers] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { user: item })}
        >
            <View>
                <Text>Name: {item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.flexy}>
            <View>
                <Text style={styles.homieOnOut}>Users Screen</Text>
                <Button
                    title='Go to Users... again'
                    onPress={() => navigation.push('Users')}
                />
                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
                />
                <Button title='Go back' onPress={() => navigation.goBack()} />

                <FlatList
                    style={styles.usersList}
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flexy: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homieOnOut: {
        textAlign: 'center',
        padding: 40,
    },
    usersList: {
        paddingTop: 40,
        textAlign: 'center',
    }
})
