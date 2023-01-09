# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  # Article.destroy_all
  # ChatgptQuery.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  # ApplicationRecord.connection.reset_pk_sequence!('articles')
  # ApplicationRecord.connection.reset_pk_sequence!('chatgptqueries')
  # TODO - clean this up
  puts 'Resetting id sequences...'

  %w(users articles likes bookmarks comments).each do |table_name|
    ApplicationRecord.connection.reset_pk_sequence!(table_name)
  end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:

  user_test = User.create!(
    username: 'test',
    name:'Test User',
    email: 'test@gmail.com',
    password: 'iuhiuh'
  )

  user_william = User.create!(
    username: 'williB',
    name: 'William B.',
    email: 'william@gmail.com',
    password: 'iuhiuh'
  )

  user_demo = User.create!(
    username: 'demo',
    name: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
  )

  # More users
  10.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      name: Faker::Internet.name,
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  puts "Creating articles..."
  seed_topics = [
    'Movies',
    'Books',
    'Shows',
    'Music',
    'Coding',
    'Home',
    'DIY',
    'Recipes',
  ]

  article1 = Article.create!(
    title: 'best indie albums of the 90s',
    body: 'lorem ipsum...',
    topic: 'music',
    author: user_test
  )

  article2 = Article.create!(
    title: 'Avatar Animation Explained',
    body: 'lorem ipsum...',
    topic: 'movies',
    author: user_william
  )

  article3 = Article.create!(
    title: 'unity vs. unreal',
    body: 'lorem ipsum...',
    topic: 'gaming',
    author: user_demo
  )

  30.times do
    Article.create!({
      title: Faker::Lorem.sentence(word_count: rand(2..12)).chomp('.'),
      body: Faker::Lorem.paragraphs(number: rand(3..15)).join('\n'),
      topic: seed_topics.sample(),
      author: user_william
    })
  end


  puts "Creating bookmarks..."
  bookmark1 = Bookmark.create!(
    article: article1,
    user: user_william
  )

  bookmark2 = Bookmark.create!(
    article: article1,
    user: user_test
  )

  bookmark3 = Bookmark.create!(
    article: article1,
    user: user_demo
    )

  bookmark4 = Bookmark.create!(
    article: article2,
    user: user_test
  )

  puts "Creating comments..."



  puts "Creating likes..."
  like1 = Like.create!(
    liked: 1,
    article: article1,
    user: user_demo
  )

  like2 = Like.create!(
    liked: 1,
    article: article2,
    user: user_demo
  )


  puts "Done!"
end



