<?php
namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Project;

class ProjectFixture extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $projectsData = [
            [
                'title' => 'Bam-System',
                'description' => 'Creation of a mock space tourism agency with a spacecraft rental platform. Website creation within 10 days after 2 weeks of developer training. Technologies used: PHP, CSS, HTML, HTML5, JavaScript, Git, Github',
                'image' => 'BamHome.jpg',
                'video' => 'Bamsystem.mp4',
                'website' => 'http://bamsystem.wib-agency.com/',
            ],
            [
                'title' => 'WIPA',
                'description' => 'AI-generated image stock website. Second Project at Wild Code School with a fictional client. Technologies used: MVC architecture, Twig, Bootstrap, MySQL, JavaScript, PHP, CSS, HTML5, Git, Github',
                'image' => 'WipaHome.jpg',
                'video' => 'Wipa.mp4',
                'website' => 'http://wipa.wib-agency.com/',
            ],
            [
                'title' => 'IREP',
                'description' => 'Virtual exhibition gallery for the AFAC974 association. Last Project at Wild Code School with a real client. Technologies used: Symfony, Tailwinds, MySQL, JavaScript, PHP, CSS, HTML5, Git, Github',
                'image' => 'IrepHome.jpg',
                'video' => 'Irep.mp4',
                'website' => NULL,
            ],
            [
                'title' => 'Destin-E',
                'description' => 'Fictitious travel booking agency for all-inclusive trips to an unknown destination. First-24-hour hackathon at Wild Code School. Technologies used: Symfony, Bootstrap, MySQL, JavaScript, PHP, CSS, HTML5, Git, Github',
                'image' => 'DestineHome.jpg',
                'video' => 'Destin-E.mp4',
                'website' => NULL,
            ],
            [
                'title' => 'Emmaüs Connect',
                'description' => 'Application for smartphone classification to generate a selling price based on their features. Second-36-hour hackathon at Wild Code School for Emmaüs Connect. Technologies used: Symfony, Bootstrap, MySQL, JavaScript, PHP, CSS, HTML5, Git, Github',
                'image' => 'EmmausHome.jpg',
                'video' => 'Emmaus.mp4',
                'website' => NULL,
            ],
        ];

        foreach ($projectsData as $data) {
            $project = new Project();
            $project->setTitle($data['title']);
            $project->setDescription($data['description']);
            $project->setImage($data['image']);
            $project->setVideo($data['video']);
            $project->setWebsite($data['website']);
            $manager->persist($project);
        }

        $manager->flush();
    }
}
