export const postQueries = { selectAll: 'Select * from portfolio.post;' }
export const profileQueries = {
    getProfile:
        'Select username from portfolio.profile_user where user_name = $1;',
}
export const commentQueries = {
    getComments:
        'insert into portfolio.comments(author_id, content, created) values((select user_id from portfolio.user_profile where user_name = $2),$1,$3);',
    makeComment:
        'Select comment_id, user_name, content, created from portfolio.comments as comments inner join portfolio.user_profile as profile on comments.author_id = profile.user_id;',
}
