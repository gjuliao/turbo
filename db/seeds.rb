

100.times do
    Post.find_or_create_by(title: Faker::Quote.famous_last_words) do |post|
        post.content = Faker::Lorem.paragraph(
            sentence_count: 64,
            supplemental: true,
            random_sentences_to_add: 4
        )
    end
end