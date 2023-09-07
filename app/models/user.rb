class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  VALID_PASSWORD_REGEX  = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/

  with_options presence: true do
    validates :nickname
    validates :date_of_birth
  end
  
  validates :password, format: { with: VALID_PASSWORD_REGEX }
end
