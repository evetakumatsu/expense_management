FactoryBot.define do
  factory :user do
    nickname              { Faker::Name.last_name }
    email                 { Faker::Internet.email }
    password              { "#{Faker::Internet.password(min_length: 6, mix_case: false)}1a" }
    password_confirmation { password }
    date_of_birth         { Faker::Date.birthday(min_age: 18, max_age: 65) }
    occupation            { Faker::Job.title }
  end
end
