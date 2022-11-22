import React from "react";

function RepoItem({ repo }: any) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>{name}</a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">{watchers_count}</div>
          <div className="mr-2 badge badge-success badge-lg">
            {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">{open_issues}</div>
          <div className="mr-2 badge badge-warning badge-lg"> {forks}</div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
