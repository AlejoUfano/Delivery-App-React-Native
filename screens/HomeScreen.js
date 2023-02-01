import { View, Text, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])
  return (
    <View className='pt-7 bg-gray-200 flex 1'>
        {/* HEADER */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
            <Image 
            source={{uri: 'https://links.papareact.com/wru'}}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <Text className='font-bold text-xl'>Current Location
                    <ChevronDownIcon size={20} color='#00ccbb'/>
                </Text>
            </View>

            <UserIcon size={35} color='#00ccbb'/>
        </View>
        {/* SEARCH */}

        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-2'>
            <View className='flex-row flex-1 space-x-2 bg-gray-300 p-3'>
                <MagnifyingGlassIcon color='gray' size={20}/>
                <TextInput placeholder='Restaurants and cuisines'/>

            </View>

            <AdjustmentsVerticalIcon color='#00ccbb'/>
        </View>
        {/* SCROLL VIEW */}

        <ScrollView className='bg-gray-100'>
            {/* Categories */}
            <Categories />

            {/* Featured */}
            <FeaturedRow
                id='123'
                title='Featured' 
                description='Paid placements from our partners' 
            />
            {/* Tasty Discounts */}
            <FeaturedRow 
                id='1234'
                title='Tasty Discounts' 
                description='Everyone has been enjoying this juicy discounts!' 
            />
            {/* Offers near you */}
            <FeaturedRow 
                id='12345'
                title='Offers near you!' 
                description='Why not support your local restaurant tonight!' 
            />

        </ScrollView>
    </View>
  )
}