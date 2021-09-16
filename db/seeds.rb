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

demoUser = User.create!(
    email: "test1@gmail.com",
    password: 'hansaem',
    first_name: 'Hansaem',
    last_name: 'Kim',
)

