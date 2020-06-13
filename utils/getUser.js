const getUser = async(userName) => {
    const resUser = await fetch(`https://api.github.com/users/${userName}`)
    const user = await resUser.json()

    const resRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`) 
    const originalRepos = await resRepos.json()

    const isNotFork = repo => !repo.fork
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })

    const repos = originalRepos
                        .filter(isNotFork)
                        .map(extractData)


    return {
        repos, user
    }
}

export default getUser