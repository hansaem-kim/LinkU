# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
About.destroy_all
Experience.destroy_all
Education.destroy_all
Comment.destroy_all

user1 = User.create!(
    email: "test1@gmail.com",
    password: 'hansaem',
    first_name: 'Hansaem',
    last_name: 'Kim',
    pronouns: "He/Him",
    headline: "Math Teacher",
    location: "Queens, New York"
)

user2 = User.create!(
    email: "test2@gmail.com",
    password: 'hansaem',
    first_name: 'Michael',
    last_name: 'Jordan',
    pronouns: "He/Him",
    headline: "NBA Player",
    location: "Chicago, Illinois, United States"
)

user3 = User.create!(
    email: "test3@gmail.com",
    password: 'hansaem',
    first_name: 'Bill',
    last_name: 'Gates',
    pronouns: "He/Him",
    headline: "Co-chair, Bill & Melinda Gates Foundation",
    location: "Seattle, Washington, United States"
)

user4 = User.create!(
    email: "test4@gmail.com",
    password: 'hansaem',
    first_name: "Jeff",
    last_name: 'Weiner',
    headline: "Executive Chairman at LinkedIn",
    location: "United States"
)

user5 = User.create!(
    email: "test5@gmail.com",
    password: 'hansaem',
    first_name: "Jaeeun",
    last_name: 'Han',
    headline: "CFO of Samsung Electronics",
    location: "Seoul, Korea"
)

user6 = User.create!(
    email: "test6@gmail.com",
    password: 'hansaem',
    first_name: "Jay",
    last_name: 'Lipp',
    headline: "High School Principal",
    location: "Bridgeport, Connecticut, United States"
)

user7 = User.create!(
    email: "test7@gmail.com",
    password: 'hansaem',
    first_name: "Lionel",
    last_name: 'Messi',
    headline: "Soccer Legend",
    location: "Paris, France"
)


post1 = Post.create!(
    body: "Hello, My name is Hansaem Kim :) ",
    author_id: user1.id
)

post2 = Post.create!(
    body: "Life is Good! ",
    author_id: user1.id
)

post3 = Post.create!(
    body: "I really like LinkU! ",
    author_id: user4.id
)

post4 = Post.create!(
    body: "Welcome to NBA",
    author_id: user2.id
)

post5 = Post.create!(
    body: "Ready to play soccer?",
    author_id: user7.id
)

about1 = About.create!(
    user_id: user1.id,
    body: "Study DS&A"
)

about2 = About.create!(
    user_id: user1.id,
    body: "10 Leetcode Problems Everyday"
)

about3 = About.create!(
    user_id: user2.id,
    body: "Make 1000 Shots"
)

about4 = About.create!(
    user_id: user7.id,
    body: "Win Ballon'dor"
)

experience1 = Experience.create!(
    user_id: user1.id,
    title: "Math Teacher",
    employment_type: "Full-time",
    company: "Bridgeport Public Schools",
    location: "Bridgeport, Connecticut, United States",
    start_date: "April 2017",
    end_date: "August 2024",
    headline: "",
    industry: "",
    description: "Algebra 1, Algebra 2, PreCalculus, Math for Engineers"
)

experience2 = Experience.create!(
    user_id: user1.id,
    title: "Corps Member",
    employment_type: "Full-time",
    company: "Teach For America",
    location: "Connecticut",
    start_date: "June 2018",
    end_date: "August 2021",
    headline: "",
    industry: "",
    description: "",
)

education1 = Education.create!(
    user_id: user1.id,
    school: "University of Illinois at Urbana-Champaign",
    degree: "Bachelor's",
    field: "General Engineering",
    activities: "Many Activities",
    description: "Good Time",
    grade: "3.9",
    start_date: "August 2012",
    end_date: "December 2017",
)

education2 = Education.create!(
    user_id: user1.id,
    school: "Good School",
    degree: "BS",
    field: "GE",
    activities: "MANY ACTIVITIES",
    description: "GOOD TIME",
    grade: "3.5",
    start_date: "March 2026",
    end_date: "October 2029",
)

education3 = Education.create!(
    user_id: user1.id,
    school: "App Academy",
    degree: "",
    field: "Programming",
    activities: "coding...coding...coding",
    description: "",
    grade: "100%",
    start_date: "June 2021",
    end_date: "October 2021"
)

education4 = Education.create!(
    user_id: user4.id,
    school: "The Wharton School",
    degree: "Bachelor of Science",
    field: "Economics",
    activities: "",
    description: "",
    grade: "",
    start_date: "August 1988",
    end_date: "June 1992"
)

comment1 = Comment.create!(
    user_id: user2.id,
    post_id: post1.id,
    body: "You are awesome!"
)

comment2 = Comment.create!(
    user_id: user3.id,
    post_id: post1.id,
    body: "Hey Hansaem!"
)

comment3 = Comment.create!(
    user_id: user4.id,
    post_id: post2.id,
    body: "It is good :)"
)

comment4 = Comment.create!(
    user_id: user1.id,
    post_id: post3.id,
    body: "Thank you!!!"
)

