<?php
namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Asset\Packages;

class ProjectController extends AbstractController
{
    #[Route('/api/projects', name: 'api_projects')]
    public function index(ProjectRepository $projectRepository, Packages $assetsManager): Response
    {
        $projects = $projectRepository->findAll();
        
        $data = array_map(function ($project) use ($assetsManager) {
            return [
                'id' => $project->getId(),
                'title' => $project->getTitle(),
                'description' => $project->getDescription(),
                'image' => $assetsManager->getUrl('build/images/' . $project->getImage()),
               'website' =>$project->getWebsite(),
               'video' => $project->getVideo() ? $assetsManager->getUrl('build/videos/' . $project->getVideo()) : null,            ];
        }, $projects);

        return $this->json($data);
    }
}
