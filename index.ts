type Task = {
    title: string;
    description: string;
};

const displayTask = () => {
    const titleElement = document.getElementById("title") as HTMLInputElement;
    const descriptionElement = document.getElementById("description") as HTMLTextAreaElement;

    const title = titleElement.value;
    const description = descriptionElement.value;

    const taskOutput = document.getElementById("taskOutput");
    taskOutput!.innerHTML = `<h2 class="text-xl font-semibold">Title: ${title}</h2><p class="text-gray-700">Description: ${description}</p>`;
}

const showTaskButton = document.getElementById("showTaskButton");
showTaskButton!.addEventListener("click", displayTask);
